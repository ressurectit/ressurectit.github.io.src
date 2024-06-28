import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DebugDataEnabledService, LogLevel} from '@anglr/common';
import {AuthorizeDirective} from '@anglr/authentication';
import {NgSelectModule} from '@anglr/select';
import {ValueNamePair} from '@jscrpt/common';
import {TranslateModule} from '@ngx-translate/core';

import {config, SettingsGeneral, SettingsDebug, LanguageDef} from '../../config';
import {SettingsService} from '../../services/settings';

/**
 * Available sections for user settings
 */
enum UserSettingsSections
{
    /**
     * General user settings
     */
    General,

    /**
     * Loggers settings
     */
    Logging,

    /**
     * Debugging settings
     */
    Debugging
}

interface SettingsLoggingEnum
{
    /**
     * Minimal log level for console sink
     */
    consoleLogLevel: LogLevel;
}

/**
 * User settings component
 */
@Component(
{
    selector: 'user-settings',
    templateUrl: 'userSettings.component.html',
    styleUrl: 'userSettings.component.scss',
    standalone: true,
    imports:
    [
        TranslateModule,
        AuthorizeDirective,
        ReactiveFormsModule,
        NgSelectModule,
        MatSlideToggleModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsSAComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Array of available themes
     */
    public themes: string[] = config.configuration.themes;

    /**
     * Array of language definitions
     */
    public languages: LanguageDef[] = config.configuration.languages;

    /**
     * Available log levels
     */
    public logLevels: ValueNamePair[] = [];

    /**
     * Form group for general settings
     */
    public generalSettingsForm: FormGroup;

    /**
     * Form group for debugging settings
     */
    public debuggingSettingsForm: FormGroup;

    /**
     * Form group for logging settings
     */
    public loggingSettingsForm: FormGroup;

    /**
     * Active section
     */
    public activeSection: UserSettingsSections = UserSettingsSections.General;

    /**
     * User settings section enum
     */
    public UserSettingsSections = UserSettingsSections;

    //######################### constructors #########################
    constructor(settingsSvc: SettingsService,
                formBuilder: FormBuilder,
                debugDataEnabled: DebugDataEnabledService,)
    {
        const settings = settingsSvc.settings;
        const debuggingSettings = settingsSvc.settingsDebugging;
        const loggingSettings = settingsSvc.settingsLogging;

        this._getLogLevels();

        this.generalSettingsForm = formBuilder.group(
        <SettingsGeneral>
        {
            language: settings.language,
            theme: settings.theme
        });

        this.debuggingSettingsForm = formBuilder.group(
        <SettingsDebug>
        {
            consoleEnabled: debuggingSettings.consoleEnabled,
            debugData: debuggingSettings.debugData
        });

        this.loggingSettingsForm = formBuilder.group(
        <SettingsLoggingEnum>
        {
            consoleLogLevel: LogLevel[loggingSettings.consoleLogLevel as keyof typeof LogLevel],
        });

        this.generalSettingsForm.valueChanges.subscribe((generalSettings: SettingsGeneral) =>
        {
            settingsSvc.setSettings(generalSettings);
        });

        this.debuggingSettingsForm.valueChanges.subscribe((debugSettings: SettingsDebug) =>
        {
            debugDataEnabled.setEnabled(debugSettings.debugData);

            settingsSvc.setDebuggingSettings(debugSettings);
        });

        this.loggingSettingsForm.valueChanges.subscribe((loggingSettings: SettingsLoggingEnum) =>
        {
            settingsSvc.setLoggingSettings(
            {
                consoleLogLevel: LogLevel[+loggingSettings.consoleLogLevel],
            });
        });
    }

    //######################### private methods #########################

    /**
     * Gets available log levels
     */
    private _getLogLevels(): void
    {
        Object.keys(LogLevel).forEach(val =>
        {
            const numVal = +val;

            if(!isNaN(numVal))
            {
                this.logLevels.push(
                {
                    name: LogLevel[numVal],
                    value: val
                });
            }
        });
    }
}