import { Database } from "bun:sqlite";

export const db = new Database("time-bot.sqlite", { create: true });
db.run("CREATE TABLE IF NOT EXISTS timezones (user_id TEXT PRIMARY KEY, timezone TEXT NOT NULL)");

export const getTimezone = (user_id: string): TimezoneQueryResult | undefined => db.query("SELECT timezone FROM timezones WHERE user_id = $user_id").get({ $user_id: user_id }) as TimezoneQueryResult | undefined;

const insert = db.query("INSERT OR IGNORE INTO timezones (user_id, timezone) VALUES($user_id, $timezone);");
const update = db.query("UPDATE timezones SET timezone=$timezone WHERE user_id=$user_id;");
export const setTimezone = (user_id: string, timezone: string) => db.transaction(x => {
    insert.run(x);
    update.run(x);
})({ $user_id: user_id, $timezone: timezone });

export type TimezoneQueryResult = {
    timezone: string,
}