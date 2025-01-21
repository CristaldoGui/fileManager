const fileManager = require('./fileManager');
const readlineSync = require('readline-sync');
const path = require('path');
const { copyFileSync } = require('fs');

async function main () {
    const baseDir = path.join(__dirname, "MyFiles");

    fileManager.createDirectory(baseDir);

    while(true) {
        console.log("\nMenu");
        console.log("1. Criar arquivo");
        console.log("2. Listar arquivos");
        console.log("3. Ler arquivo");
        console.log("4. Escrever arquivo");
        console.log("5. Deletar arquivo");
        console.log("6. Sair");
        
        const choice = readlineSync.question("Escolha uma opção: ");

        try {
            switch(choice) {
                case '1':
                    const fileName = readlineSync.question("Digite o nome do arquivo: ");
                    const fileContent = readlineSync.question("Digite o conteudo do arquivo: ");
                        
                    const createFilePath = path.join(baseDir, fileName);
    
                    const fileMessage = await fileManager.createFile(createFilePath, fileContent);
    
                    console.log(fileMessage);
                    break;
                case '2':
                    const files = await fileManager.listFiles(baseDir);
    
                    console.log("Arquivos no diretorio: ", files);
                    break;
                case '3':
                    const nameFile = readlineSync.question("Qual o nome do arquivo desejado: ");
                    const filePath = path.join(baseDir, nameFile); 
    
                    const content = await fileManager.readFiles(filePath);
    
                    console.log("Conteudo do arquivo:", content);
                    break;
                case '4':
                    const updateFile = readlineSync.question("Qual arquivo voce deseja modificar? ");
                    const contentUdateFile = readlineSync.question("Oq vc deseja escrever?"); 
                    const updateFilePath = path.join(baseDir, updateFile);
    
                    const messageUpdate = await fileManager.writeFile(updateFilePath, contentUdateFile);
    
                    console.log(messageUpdate);
                    break;
                case '5':
                    const deleteFile = readlineSync.question("Qual arquivo vc deseja deletar?: ");
                    const deleteFilePath = path.join(baseDir, deleteFile);
    
                    const messageDelete = await fileManager.deleteFile(deleteFilePath, deleteFile);
    
                    console.log(messageDelete);
                    break;
                case '6':
                    console.log("\nSaindo...");
                    return;
                default:
                    console.log("Opção invalida. Tente novamente!");      
            }
        } catch(error) {

        }
    }
}

main();