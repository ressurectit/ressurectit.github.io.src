---
description: Instructions for creating new samples in the project. Covers file structure, naming, templates, and registration.
applyTo: "app/samples/**"
---

# Creating Samples

This document describes how to create new samples in the `app/samples/` directory. Follow these conventions exactly — **do NOT use Angular CLI** (`ng generate`) for samples, as the project's naming, formatting, and structure conventions differ significantly from Angular CLI defaults.

For TypeScript formatting, naming, and code conventions, always follow the rules in [typescript instructions](./typescript.instructions.md).

## Sample Architecture Overview

Each sample consists of **two standalone components**:

1. **Sample component** (`<name>Sample.component.ts`) — the actual demo, containing all logic and UI
2. **View component** (`<name>.component.ts`) — a thin wrapper that displays the sample alongside source code tabs

Samples are organized into **groups** (e.g., `grid`, `select`, `datetime`). Each group is a folder under `app/samples/` with its own barrel `index.ts`.

> **Important:** Do NOT create NgModule declarations for samples. All sample components use standalone `imports` directly on `@Component`.

---

## Directory Structure

```
app/samples/
├── <group>/                        # Sample group (e.g., select, grid, datetime)
│   ├── index.ts                    # Barrel file — exports all view components
│   ├── <sampleName>/               # Individual sample folder (camelCase)
│   │   ├── <sampleName>Sample.component.ts     # Sample component
│   │   ├── <sampleName>Sample.component.html   # Sample template
│   │   ├── <sampleName>.component.ts           # View/wrapper component
│   │   └── <sampleName>.component.html         # View template with source tabs
│   └── <anotherSample>/
│       └── ...
```

Most samples contain these 4 files. Add auxiliary files (helper directives, services, interfaces, etc.) when the sample requires them, and include them as extra source tabs in the view template.

---

## Naming Conventions

| Element | Convention | Example (for sample name `addNewOption` in group `select`) |
| --- | --- | --- |
| Folder name | camelCase | `addNewOption/` |
| Sample component file | `<name>Sample.component.ts` | `addNewOptionSample.component.ts` |
| Sample template file | `<name>Sample.component.html` | `addNewOptionSample.component.html` |
| View component file | `<name>.component.ts` | `addNewOption.component.ts` |
| View template file | `<name>.component.html` | `addNewOption.component.html` |
| Sample component selector | kebab-case + `-sample` | `add-new-option-sample` |
| View component selector | kebab-case + `-view` | `add-new-option-view` |
| Sample component class | PascalCase + `SampleComponent` | `AddNewOptionSampleComponent` |
| View component class | PascalCase + `Component` | `AddNewOptionComponent` |

---

## Automation Script

Use the included script to scaffold a new sample instead of creating files by hand:

```bash
npm run new-sample -- --group <group> --name <name>
```

| Flag | Alias | Required | Description |
| --- | --- | --- | --- |
| `--group` | `-g` | Yes | Group folder name (must already exist, e.g. `select`) |
| `--name` | `-n` | Yes | Sample name in **lower camelCase** (e.g. `myNewSample`) |
| `--create-group` | — | No | Create the group folder and barrel when the group doesn't exist yet |

The script creates all four boilerplate files and appends the export to `app/samples/<group>/index.ts`. You still need to complete Step 7 (register in content/menu) manually.

---

## Step-by-Step: Adding a New Sample to an Existing Group

Replace `<name>` with the camelCase sample name and `<group>` with the group folder name.

### 1. Create the sample folder

Create folder `app/samples/<group>/<name>/`.

### 2. Create the sample component

**File:** `app/samples/<group>/<name>/<name>Sample.component.ts`

```typescript
import {Component, ChangeDetectionStrategy} from '@angular/core';

/**
 * <Description> sample for <group> component
 */
@Component(
{
    selector: '<kebab-name>-sample',
    templateUrl: '<name>Sample.component.html',
    imports:
    [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <PascalName>SampleComponent
{
}
```

Key rules:
- **Start with boilerplate only** — do NOT analyze the component being demoed or add any demo logic; fill in the actual implementation later
- Always use `ChangeDetectionStrategy.OnPush`
- List `imports` array items from shortest to longest name
- Use section comment titles per the [comments instructions](./typescript/comments.md) when adding properties/methods
- Follow all [formatting rules](./typescript/formatting.md) (braces on new line, 4 spaces, single quotes, etc.)

### 3. Create the sample template

**File:** `app/samples/<group>/<name>/<name>Sample.component.html`

Start with this minimal boilerplate — do **not** add any actual demo UI at this stage:

```html
<h2><Title Name></h2>
<p>Demo placeholder.</p>
```

The title is the sample name split into words and title-cased (e.g. `myNewSample` → `My New Sample`). Fill in the real template once the boilerplate is in place.

### 4. Create the view component

**File:** `app/samples/<group>/<name>/<name>.component.ts`

```typescript
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {AsyncPipe} from '@angular/common';

import {SamplesFeatureModule} from '../../../modules';
import {<PascalName>SampleComponent} from './<name>Sample.component';

/**
 * <Description> sample for <group> component
 */
@Component(
{
    selector: '<kebab-name>-view',
    templateUrl: '<name>.component.html',
    imports:
    [
        AsyncPipe,
        SamplesFeatureModule,
        <PascalName>SampleComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <PascalName>Component
{
}
```

Key rules:
- Always import `AsyncPipe` and `SamplesFeatureModule`
- Import the sample component from the same folder
- The class body is empty — all logic belongs in the sample component
- Sort `imports` array items from shortest to longest name

### 5. Create the view template

**File:** `app/samples/<group>/<name>/<name>.component.html`

```html
<source-code>
    <mat-tab-group>
        <mat-tab label="<name>Sample.component.ts">
            <div [renderMarkdown]="'samples/<group>/<name>/<name>Sample.component.ts' | asSource | async"></div>
        </mat-tab>

        <mat-tab label="<name>Sample.component.html">
            <div [renderMarkdown]="'samples/<group>/<name>/<name>Sample.component.html' | asSource: 'html' | async"></div>
        </mat-tab>
    </mat-tab-group>
</source-code>

<<kebab-name>-sample/>
```

Key rules:
- Source paths start at `samples/`, **not** `app/samples/` — this is important
- TypeScript files use `| asSource | async`
- HTML files use `| asSource: 'html' | async`
- If the sample has auxiliary files (interfaces, services, directives), add them as extra `<mat-tab>` entries
- The sample component element at the bottom uses self-closing tag syntax (`<selector/>`)

### 6. Export from the group barrel file

**File:** `app/samples/<group>/index.ts`

Add the view component export (NOT the sample component):

```typescript
export * from './<name>/<name>.component';
```

> **Important:** The barrel file must export the **view component class**, because dynamic imports resolve samples through this index. If missing, the sample will not be discoverable at runtime.

### 7. Register in content/menu

The sample must be referenced from the content/menu system to be visible in the application. Update the relevant markdown/content source to include the sample using the project's dynamic sample inclusion convention.

---

## Step-by-Step: Creating a New Sample Group

### 1. Create the group folder

Create folder `app/samples/<newGroup>/`.

### 2. Create the barrel file

**File:** `app/samples/<newGroup>/index.ts`

```typescript
export * from './<firstSample>/<firstSample>.component';
```

### 3. Create samples

Follow the steps in [Adding a New Sample to an Existing Group](#step-by-step-adding-a-new-sample-to-an-existing-group) for each sample.

### 4. Register the group

Ensure the new group is importable and referenced from the content system so its samples appear in the application navigation.

---

## Checklist

Use this checklist when creating a new sample:

- [ ] Sample folder created with camelCase name
- [ ] `<name>Sample.component.ts` created with correct selector (`<kebab>-sample`), `OnPush`, and section comments
- [ ] `<name>Sample.component.html` created with minimal boilerplate (title heading + placeholder paragraph)
- [ ] `<name>.component.ts` created with correct selector (`<kebab>-view`), importing `AsyncPipe`, `SamplesFeatureModule`, and the sample component
- [ ] `<name>.component.html` created with `<source-code>` tabs and sample element (source paths start at `samples/`, not `app/samples/`)
- [ ] View component exported from group `index.ts`
- [ ] Sample referenced from content/menu system
- [ ] All files follow [TypeScript formatting](./typescript/formatting.md), [naming](./typescript/naming-conventions.md), [code conventions](./typescript/code-conventions.md), and [comment](./typescript/comments.md) rules

---

## Why NOT Angular CLI

Do **not** use `ng generate component` for samples because:

1. **File naming** — Angular CLI uses kebab-case (`basic-sample.component.ts`), but this project uses camelCase (`basicSample.component.ts`)
2. **Formatting** — Angular CLI places opening braces on the same line; this project places them on a new line
3. **Two-component pattern** — each sample requires a paired view + sample component, which is not a standard Angular schematic
4. **No SCSS by default** — samples typically do not have their own style files
