import request from "supertest";
import { afterAll, beforeEach } from "vitest";
import { app, server } from "~/main";

const api = request(app);

// const productos: Product[] = customArray().map(() => ({
//     nombre: faker.commerce.productName(),
//     descripcion: faker.commerce.productDescription(),
//     precio: +faker.commerce.price(),
// }));
beforeEach(async () => {
	// await ProductModel.deleteMany();
	// await ProductModel.insertMany(productos);
});

afterAll(() => {
	server.close();
});

export { api };
