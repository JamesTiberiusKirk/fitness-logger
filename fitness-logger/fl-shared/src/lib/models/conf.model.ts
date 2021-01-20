/**
 * Config for an entire microservice.
 * Sub-configs are optional to enable the once needed.
 */
export interface MicroserviceConfig {
    name: string;
    serverConfig?: ServerConfig;
    dbConfig?: DbConfig;
}

/**
 * Config interface for HTTP servers.
 */
export interface ServerConfig {
    port: string;
}

/**
 * Config for the DB.
 */
export interface DbConfig {
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
}


/**
 * Environment config.
 */
export interface EnvironmentConfig {
    MS_NANE: string | undefined;
    HTTP_PORT: string | undefined;
    DB_HOST: string | undefined;
    DB_PORT: string | undefined;
    DB_USERNAMER: string | undefined;
    DB_PASSWORD: string | undefined;
}