function ordenar(name) {
    let order = '';
    for (let i = 0; i < name.length; i++) {
        order = name.sort();
    }
    return order;
}
console.log(ordenar(['Eliseo Rodriguez', 'Alma Alves', 'Cynthia Cerdan']))
