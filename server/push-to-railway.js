import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------
// CONFIGURATION RAILWAY (VOS INFOS)
// ---------------------------------------------------------
const RAILWAY_CONFIG = {
    host: "switchback.proxy.rlwy.net",      // Public Host
    port: 35530,                            // Public Port
    user: "root",                           // User
    password: "BtKjXulFQNKGACQRaeXvzGuMUIbPcoJe",     // Password
    database: "railway",                    // Database Name
    multipleStatements: true                // Nécessaire pour exécuter tout le fichier SQL
};
// ---------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function pushToRailway() {
    console.log("⏳ Connexion à Railway...");

    try {
        const connection = await mysql.createConnection(RAILWAY_CONFIG);
        console.log("✅ Connecté à Railway !");

        console.log("⏳ Lecture du fichier testdb2.sql...");
        const sqlPath = path.join(__dirname, 'testdb2.sql');
        let sql = fs.readFileSync(sqlPath, 'utf8');

        // ---------------------------------------------------------
        // IMPORTANT : On enlève la création de base de données
        // pour forcer l'utilisation de la DB "railway" par défaut
        // ---------------------------------------------------------
        console.log("🔧 Adaptation du script pour Railway...");
        sql = sql.replace(/CREATE DATABASE IF NOT EXISTS testdb2;/g, '');
        sql = sql.replace(/USE testdb2;/g, '');

        console.log("⏳ Exécution du script SQL...");
        await connection.query(sql);

        console.log("✅ SUCCÈS ! Les tables et l'utilisateur ont été créés DANS la base 'railway'.");
        console.log("👉 Vous devriez maintenant voir les tables dans Railway.");

        await connection.end();
    } catch (err) {
        console.error("❌ ERREUR lors de l'envoi :", err.message);
    }
}

pushToRailway();
