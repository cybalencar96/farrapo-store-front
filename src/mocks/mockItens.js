const mockMenu = [
    {
        title: "Até R$40,00",
        forwardMessage: "Uma pechincha!!",
        itens: [
            {name: "Camisa de manga curta", description: "Camisa em bom estado, pouco usada", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/08/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
        ]
    },
    {
        title: "Azul da cor do mar",
        forwardMessage: "Minha sorte então mudou!",
        itens: [
            {name: "Camisa teste pra valer do balacubaco", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
        ]
    },
    {
        title: "Bonita camisa, Fernandinho!",
        forwardMessage: "Preciso de uma camisa nova!",
        itens: [
            {name: "Camisa teste pra valer do balacubaco", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
        ]
    },
    {
        title: "Vem chegando o verão!",
        forwardMessage: "O calor no coração!",
        itens: [
            {name: "Camisa teste pra valer do balacubaco", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
        ]
    },
    {
        title: "A criançada vai adorar!",
        forwardMessage: "Sem essa de 'Na volta a gente compra'",
        itens: [
            {name: "Camisa teste pra valer do balacubaco", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020") },
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
            {name: "Camisa teste", description: "Camisa teste para testar", price: 19.90, color: "Azul", size: "G", quantity: 2, image: "https://images.freeimages.com/images/large-previews/36d/t-shirt-1426871.jpg", created_at: new Date("11/06/2020")},
        ]
    },    
]
    


export {
    mockMenu,
}