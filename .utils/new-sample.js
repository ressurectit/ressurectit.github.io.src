import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {existsSync, mkdirSync, writeFileSync, readFileSync, appendFileSync} from 'node:fs';
import chalk from 'chalk';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const dirName = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(dirName, '..');
const samplesDir = join(projectRoot, 'app', 'samples');

const argv = await yargs(hideBin(process.argv))
    .option('group',
    {
        alias: 'g',
        type: 'string',
        description: 'Sample group (folder name under app/samples/)',
        demandOption: true,
    })
    .option('name',
    {
        alias: 'n',
        type: 'string',
        description: 'Sample name in lower camelCase (e.g., myNewSample)',
        demandOption: true,
    })
    .option('create-group',
    {
        type: 'boolean',
        description: 'Create the group folder and barrel if it does not exist yet',
        default: false,
    })
    .strict()
    .help()
    .argv;

const {group, name, createGroup} = argv;

// Validate name is lower camelCase
if(!/^[a-z][A-Za-z0-9]*$/.test(name))
{
    console.error(chalk.red(`Error: --name must be lower camelCase (e.g., myNewSample). Got: "${name}"`));
    process.exit(1);
}

// Name transformations
const pascalName = name[0].toUpperCase() + name.slice(1);
const kebabName = name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
const titleName = name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase());

const groupDir = join(samplesDir, group);
const barrelFile = join(groupDir, 'index.ts');
const sampleDir = join(groupDir, name);

// Validate group
if(!existsSync(groupDir))
{
    if(createGroup)
    {
        mkdirSync(groupDir, {recursive: true});
        console.log(chalk.green(`Created group directory: app/samples/${group}/`));
    }
    else
    {
        console.error(chalk.red(`Error: Group "${group}" does not exist at app/samples/${group}/`));
        console.error(chalk.yellow(`Tip: Use --create-group to create a new group.`));
        process.exit(1);
    }
}

// Guard against overwriting an existing sample
if(existsSync(sampleDir))
{
    console.error(chalk.red(`Error: Sample "${name}" already exists in group "${group}".`));
    process.exit(1);
}

// Create sample folder
mkdirSync(sampleDir, {recursive: true});

// File contents
const sampleComponentTs =
`import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * ${titleName} sample for ${group} component
 */
@Component(
{
    selector: '${kebabName}-sample',
    templateUrl: '${name}Sample.component.html',
    imports:
    [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ${pascalName}SampleComponent
{
}
`;

const sampleComponentHtml =
`<h2>${titleName}</h2>
<p>Demo placeholder.</p>
`;

const viewComponentTs =
`import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {${pascalName}SampleComponent} from './${name}Sample.component';

/**
 * ${titleName} sample for ${group} component
 */
@Component(
{
    selector: '${kebabName}-view',
    templateUrl: '${name}.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        ${pascalName}SampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ${pascalName}Component
{
}
`;

const viewComponentHtml =
`<source-code>
    <mat-tab-group>
        <mat-tab label="${name}Sample.component.ts">
            <div [renderMarkdown]="'samples/${group}/${name}/${name}Sample.component.ts' | asSource | async"></div>
        </mat-tab>

        <mat-tab label="${name}Sample.component.html">
            <div [renderMarkdown]="'samples/${group}/${name}/${name}Sample.component.html' | asSource: 'html' | async"></div>
        </mat-tab>
    </mat-tab-group>
</source-code>

<${kebabName}-sample/>
`;

// Write all four files
writeFileSync(join(sampleDir, `${name}Sample.component.ts`), sampleComponentTs);
writeFileSync(join(sampleDir, `${name}Sample.component.html`), sampleComponentHtml);
writeFileSync(join(sampleDir, `${name}.component.ts`), viewComponentTs);
writeFileSync(join(sampleDir, `${name}.component.html`), viewComponentHtml);

// Update (or create) the barrel file
const exportLine = `export * from './${name}/${name}.component';\n`;

if(!existsSync(barrelFile))
{
    writeFileSync(barrelFile, exportLine);
    console.log(chalk.green(`Created barrel: app/samples/${group}/index.ts`));
}
else
{
    const barrelContent = readFileSync(barrelFile, 'utf8');

    if(!barrelContent.includes(`export * from './${name}/${name}.component'`))
    {
        const needsNewline = barrelContent.length > 0 && !barrelContent.endsWith('\n');
        appendFileSync(barrelFile, `${needsNewline ? '\n' : ''}${exportLine}`);
    }
    else
    {
        console.log(chalk.yellow(`Barrel export for "${name}" already present — skipped.`));
    }
}

console.log(chalk.green(`\n✓ Sample "${name}" created in group "${group}":`));
console.log(`  app/samples/${group}/${name}/${name}Sample.component.ts`);
console.log(`  app/samples/${group}/${name}/${name}Sample.component.html`);
console.log(`  app/samples/${group}/${name}/${name}.component.ts`);
console.log(`  app/samples/${group}/${name}/${name}.component.html`);
console.log(chalk.yellow(`\n⚠  Don't forget to register the sample in the content/menu system (Step 7).`));
