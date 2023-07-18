import React, { useEffect, useState } from 'react'
import Botonsvg from "../public/images/botonPago.svg"
import Image from "next/image";
import Form  from "../components/form";
import Footer from "../components/footer";
import Header from "../public/images/header-100.png"
import { payment } from 'mercadopago';
import { useRouter } from 'next/router';
interface NotificationType {
    isOpen: boolean;
    type: "approved" | "failure" | null;
    content: string;
  }
export default function checkout() {
    const router = useRouter()
    const [buy,setBuy] = useState<Boolean>(false)
    const [notification, setNotification] = useState<NotificationType>({
        isOpen: false,
        type: null,
        content: "",
      });
      const [payment, setPayment] = useState<Boolean>(true)
      const handleBuy = () => {setBuy(buy == false ? true : false)}
      const GuardarDatos = (payment_id: string | null)=>{
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
                    "direccion": sessionStorage.getItem("direccion")?.toString(),
                    "payment_id": payment_id,
                    "ciudad":sessionStorage.getItem("ciudad")?.toString(),
                }
            ]
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      }

      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get("status");
        const paymentid = urlParams.get("payment_id");   
        if(paymentid && payment) {
          GuardarDatos(paymentid)
          setPayment(false)
          router.push('/checkout')
        }
        if (status === "approved") {
          setNotification({
            content: "Pago aprobado!",
            isOpen: true,
            type: "approved",
          });
          console.log("aprobado")
        } else if (status === "failure") {
          setNotification({
            content: "Pago fallido!",
            isOpen: true,
            type: "failure",
          });
          console.log("fallido")
        }
    
        setTimeout(() => {
          setNotification({
            isOpen: false,
            type: null,
            content: "",
          });
        }, 5000);
      }, [payment]);
  return (
    <div className="m-5">
        <div className='text-center'>
        <Image src={Header} objectFit='cover'/>
        </div>
        <div className='text-center'>
        <a className="hover:cursor-pointer mx-auto" onClick={handleBuy}>
          <Image src={Botonsvg} height={190} objectFit='cover'/>
        </a>
        </div>
        
        {
          buy ?
          <Form/>
          :
          null
        }
    {notification.isOpen && (
        <div className="notification">
          <div
            className="iconContainer"
            style={{
              backgroundColor:
                notification.type === "approved" ? "#00cc99" : "#ee4646",
            }}
          >
            <Image
              src={`/public/${notification.type}.svg`}
              alt={notification.type!}
              width={25}
              height={25}
            />
          </div>

          <p>{notification.content}</p>
        </div>
      )}
      <Footer />
    </div>
  )
}
