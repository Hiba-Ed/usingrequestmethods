'use strict'

class TestController {
   //Extracting the view class of the HTTP context
   add({ view }) {
    return view.render("add")
}
    async product({request}) {
        // const product_id = request.input("product_id")
        // const product_name = request.input("product_name")
        // return product_id + ", " + product_name
        const form = request.only(['product_id', 'product_name'])
        return form.product_id + ', ' + form.product_name
    }
}

module.exports = TestController