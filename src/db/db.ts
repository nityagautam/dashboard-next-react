import Execution from "@/models/execution";
import Project from "@/models/project";
import User from "@/models/user";
import { Knex, knex } from "knex";
import path from "path";


// Connecting to Sqlite3 database
const db = knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve((process.env.SQLITE_FILENAME || './database.db').toString()),
    }
});

// Create Tables in the Sqlite3 DB with 'Knex' query-builder
const tableForUsers = "users";
const tableForProjects = "projects";
const tableForExecutions = "executions";

export const getUsers = (): Knex.QueryBuilder<User, User[]> => db(tableForUsers);
export const getProjects = (): Knex.QueryBuilder<Project, Project[]> => db(tableForProjects);
export const getExecutionHistory = (): Knex.QueryBuilder<Execution, Execution[]> => db(tableForExecutions);

// Now, Initialize the various tables
export const initializeTables = async () => {
    
    await console.log('Connecting with database and initializing the tables ...');

    // For Users
    if (!(await db.schema.hasTable(tableForUsers))) {
        await console.log('Initializing the "'+tableForUsers+'" tables ...');
        await db.schema.createTable(tableForUsers, (table) => {
            table.increments("id", { primaryKey: true, });
            table.string("username").notNullable();
            table.string("password").notNullable();
            table.string("email").notNullable();
            table.string("firstName").notNullable();
            table.string("lastName").notNullable();
            table.integer("age").defaultTo(1);
            table.string("gender").defaultTo("other");
            table.boolean("isAdmin").defaultTo(false);
        });
    }
  
    // For Projects
    if (!(await db.schema.hasTable(tableForProjects))) {
        await console.log('Initializing the "'+tableForProjects+'" tables ...');
        await db.schema.createTable(tableForProjects, (table) => {
            table.increments("id", { primaryKey: true, });
            table.string("name").notNullable();
            table.string("desc").notNullable();
            table.string("source").notNullable();
            table.string("desc").notNullable();
            table.string("jenkins_url").notNullable();
            table.string("jenkins_user").notNullable();
            table.string("jenkins_password").notNullable();
            table.string("isActive").defaultTo(true);
            table.string("created").notNullable();
            table.string("last_executed").notNullable();
            table.string("last_updated").notNullable();     // JSON.stringify as number[]
        });
    }
    
    // For Executions
    if (!(await db.schema.hasTable(tableForExecutions))) {
        await console.log('Initializing the "'+tableForExecutions+'" tables ...');
        await db.schema.createTable(tableForExecutions, (table) => {
            table.increments("id", { primaryKey: true, });
            table.string("project_id").notNullable();
            table.bigInteger("source").notNullable();
            table.bigInteger("jenkins_url").notNullable();
            table.boolean("result").defaultTo("{'total':0, 'pass':0, 'fail':0, 'error':0, 'skipped':0}");          // JSON.stringify as object{'total':0, 'pass':0, 'fail':0, 'error':0, 'skipped':0}
            table.bigInteger("dated").notNullable();
        });
    }
};

