import { useEffect, useState } from "react";
import { IProduct } from "../mock/product";
import { Loader } from "../components/loader";
import axios from "axios";
import Botonsvg from "../public/images/botonPago.svg"
import Image from "next/image";

import styles from "./styles.module.scss";

interface MercadoPagoButtonProps {
  product: IProduct;
}

export const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", {
          product,
        });

        setUrl(preference.url);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    generateLink();
  }, [product]);

  return (
    <div>
      {loading ? (
          null
      ) : (
        <a className="hover:cursor-pointer" href={url!}>
          <Image src={Botonsvg} height={190} objectFit='cover'/>
        </a>
      )}
    </div>
  );
};

