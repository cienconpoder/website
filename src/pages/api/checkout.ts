import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../mock/product";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN!,
});



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const product: IProduct = req.body.product;

    const URL = "https://www.lasvocesdelpoder.co/checkout/";

    const GuardarDatos = ()=>{
      fetch('https://sheetdb.io/api/v1/62ihjomr8ewxq', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              {
                  "telefono": sessionStorage.getItem("telefono")?.toString(),
                  "nombre": sessionStorage.getItem("nombre")?.toString(),
                  "documento": sessionStorage.getItem("documento")?.toString(),
                  "correo electronico": sessionStorage.getItem("email")?.toString(),
                  "dedicatoria": sessionStorage.getItem("dedicatoria")?.toString(),
                  "direccion": sessionStorage.getItem("direccion")?.toString()
              }
          ]
      })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
    }

    try {
      const preference: CreatePreferencePayload = {
        items: [
          {
            title: product.title,
            unit_price: product.price,
            quantity: 1,
          },
        ],
        auto_return: "approved",
        back_urls: {
          success: `${URL}`,
          failure: `${URL}`,
        },
        notification_url: `${URL}/api/notify`,
      };

      const response = await mercadopago.preferences.create(preference);
      GuardarDatos()
      res.status(200).send({ url: response.body.init_point });
    } catch (error) {}
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default handler;
