import sql from "./db/db.js";

(async () => {
  try {
    const now = await sql`SELECT NOW()`;
    console.log('Connected:', now);
  } catch (err) {
    console.error('Connection error:', err);
  }
})();