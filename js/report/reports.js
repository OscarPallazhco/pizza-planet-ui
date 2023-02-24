fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        topCustomers = report.top_3_customers
        month = report.month_with_more_revenue
        ingredient = report.most_request_ingredient

        let customersContainer = $("#top-customers-container");
        let statsContainer = $("#stats-container");

        let customerCards = topCustomers.map(customer => createTopCustomerTemplate(customer));
        customersContainer.append(customerCards);

        let monthCard = createMonthRevenueTemplate(month);
        let ingredientCard = createIngredientTemplate(ingredient);
        statsContainer.append(monthCard);
        statsContainer.append(ingredientCard);
    });


function createTopCustomerTemplate(customer) {
    let template = $("#top-customer-item-template")[0].innerHTML;
    return Mustache.render(template, customer);
}

function createMonthRevenueTemplate(month) {
    let template = $("#stat-month-revenue-template")[0].innerHTML;
    return Mustache.render(template, month);
}

function createIngredientTemplate(ingredient) {
    let template = $("#stat-ingredient-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}