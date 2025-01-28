const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        // Fecha todas as outras janelas
        document.querySelectorAll('.acordeon').forEach((item) => {
            item.classList.remove('open')
        })

        // Abre a janela atual, se não estiver aberta
        if (!isOpen) {
            acordeon.classList.add('open')
        }
    })
})
