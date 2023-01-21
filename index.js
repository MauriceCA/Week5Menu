class Books {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    describe(){
        return `${this.title} is authored by ${this.author}`;
    }
}

class Menu {
    constructor (){
        this.books = [];
        console.log(this.books);
    }
    
    start(){
        let selection = this.showMainMenuOptions();
        
        while (selection != 0){
            switch (selection){
                case '1':
                    this.addBook();
                    break;
                case '2':
                    this.deleteBook();
                    break;
                case '3':
                    this.displayBooks();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert(`Anoshe!
        (Until Another Day)`);
    }
    showMainMenuOptions(){

        return prompt(`
        Book Menu

        0) Exit
        1) Add new book
        2) Delete book from list
        3) Display all books in list
        `);
        
    }

    displayBooks(){
        let titleAuthor = '';
        for (let i = 0; i < this.books.length; i++){
            titleAuthor += i + ') ' + this.books[i].title + ' - ' 
            + this.books[i].author + '\n';
            
        }
        alert(titleAuthor); 
    }
    addBook(){
        let title = prompt('Enter the title of the new book:');
        let author = prompt('Enter the author for the new book:')
        this.books.push(new Books(title, author));
        
    }

    deleteBook(){
        let index = prompt('Enter the index of the book you wish to delete:');
        if (index > -1 && index < this.books.length){
            this.books.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();