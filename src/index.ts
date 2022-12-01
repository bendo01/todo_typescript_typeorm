import { AppDataSource } from "./data-source";
import { Task } from "./entity/Task";
import promptSync from 'prompt-sync';

function menu() {
    console.info("Menu Applikasi Todo");
    console.info("1. Tambah Task");
    console.info("2. Daftar Task");
    console.info("3. Ubah Task");
    console.info("4. Hapus Task");
    console.info("5. Selesai Task");
    console.info("0. untuk Keluar dari applikasi");
    console.info("Masukkan Angka 1 - 5 untuk memilih operasi yang ingin dilakukan");
}

AppDataSource.initialize().then(async () => {
    /*
    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")
    */

    const prompt = promptSync({sigint: true});
    let input_menu = null;
    do {
        menu();
        input_menu = prompt("Masukkan Pilihan Operasi yang ingin anda lakukan ? ");
        console.log(`Pilihan Anda: ${input_menu}`);
        if (parseInt(input_menu) === 1) {
            console.log("Anda Memilih Operasi Tambah Data Task");
            const input_data = prompt("Masukkan Nama Task : ");
            let task = new Task();
            task.name = input_data;
            task.is_done = false;
            await AppDataSource.manager.save(task);
        } else if (input_menu === 2) {
            console.log("Mohon lengkapi modul ini");
        } else if (input_menu === 3) {
            console.log("Mohon lengkapi modul ini");
        } else if (input_menu === 4) {
            console.log("Mohon lengkapi modul ini");
        } else if (input_menu === 5) {
            console.log("Mohon lengkapi modul ini");
        } else {
            console.log("Terimakasih telah menggunakan applikasi kami");
            return process.exit(1);
        }
    } while (parseInt(input_menu) >= 1 && parseInt(input_menu) <= 5 );
}).catch(error => console.log(error))
