import { useForm } from "react-hook-form";
import { Product } from "../mock/product";
import Swal from 'sweetalert2'
import React, { useState } from "react";
import { MercadoPagoButton } from "./mercadopagoBoton";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [data,setData] = useState<Boolean>(false);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const onSubmit = (userInfo: any) => {
    Toast.fire({
        icon: 'success',
        title: 'Datos Registrados'
      })
    sessionStorage.setItem("nombre",userInfo.name);
    sessionStorage.setItem("telefono",userInfo.phone);
    sessionStorage.setItem("documento",userInfo.cc);
    sessionStorage.setItem("email",userInfo.mail);
    sessionStorage.setItem("direccion",userInfo.address);
    sessionStorage.setItem("dedicatoria",userInfo.dedicatory);
    setData(true)
  };

  

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre completo</label>
      <input {...register("name")} name="name" type="text" required />

      <label htmlFor="phone">Teléfono móvil</label>
      <input {...register("phone")} name="phone" type="tel" required  />

      <label htmlFor="documento">Documento Identidad</label>
      <input {...register("cc")} name="cc" type="text" required />

      <label htmlFor="mail">Correo electrónico</label>
      <input {...register("mail")} name="mail" type="email" required />

      <label htmlFor="direccion">Dirección de envio</label>
      <input {...register("address")} name="address" type="text" required />

      <label htmlFor="dedicatory">A quien va dedicado</label>
      <input {...register("dedicatory")} name="dedicatory" type="text"  required />
      {!data ?
    <button className="w-[80%] h-[100px] bg-[#63d5f9] text-center flex justify-center items-center mx-auto font-sans text-[26px] font-bold text-white " type="submit">Resgistrar datos de envio</button>
    :
    null
    }
    </form>
    {data ?
    <MercadoPagoButton product={Product}/>  :
    null}
    </>
  );
}
