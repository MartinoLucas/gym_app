import getPool from './getPool.js'

const main = async ()=>{
    const pool = await getPool()

    console.log('Borrando tablas...')

    await pool.query('DROP TABLE IF EXIXSTS notes, users')
    console.log('Creando tablas...')
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        userName VARCHAR(15) NOT NULL,                                   
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
        )`
    )

    await pool.query(`
        CREATE TABLE IF NOT EXISTS categorias (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) UNIQUE NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP 
    )
`)

    await pool.query(`
        CREATE TABLE IF NOT EXISTS notas (
        id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(50) NOT NULL,
        detail TEXT,
        text TEXT NOT NULL,
        categoriaId  INT UNSIGNED NOT NULL,
        userId INT UNSIGNED NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id),
        FOREIGN KEY (categoriaId) REFERENCES categorias(id)
        )
    `)

    await pool.query(`
        INSERT INTO categorias(name)
        VALUES 
        ("Arte"),
        ("Ciencia"),
        ("Cultura"),
        ("Deportes"),
        ("Gastronomía"),
        ("Idiomas"),
        ("Música"),
        ("Naturaleza"),
        ("Tecnología"),
        ("Otros");
        ;
        `);

    console.log('Tablas creadas.');

}

