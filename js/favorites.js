export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login: 'walacecordeiro',
            name: "Walace Cordeiro",
            public_repos: '95',
            followers: '12000',
        },
        {
            login: 'diego3g',
            name: "Diego Fernandes",
            public_repos: '95',
            followers: '12000',
        },
        ]
    
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
              <img src="https://github.com/walacecordeiro.png" alt="" />
              <a href="https://github.com/walacecordeiro" target="_blank">
                <p>Walace Cordeiro</p>
                <span>Wal-le</span>
              </a>
            </td>
            <td class="repositories">76</td>
            <td class="followers">98465</td>
            <td>
              <button class="remove">Remover</button>
            </td>
       `
        return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}