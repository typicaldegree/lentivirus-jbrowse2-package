declare const AlphaMissensePathogenicityAdapter: import("@jbrowse/core/configuration/configurationSchema").ConfigurationSchemaType<{
    /**
     * #slot
     */
    location: {
        type: string;
        defaultValue: {
            uri: string;
            locationType: string;
        };
    };
}, import("@jbrowse/core/configuration/configurationSchema").ConfigurationSchemaOptions<undefined, undefined>>;
export default AlphaMissensePathogenicityAdapter;
