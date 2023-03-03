import * as Yup from "yup"

export const registerValidation = Yup.object({
    name: Yup.string().min(4).max(25).required("Please Enter Name !!"),
    address:Yup.string().min(5).max(30).required("Please Enter Address"),
    dob:Yup.date().max(new Date()).required("Please Select Date Of Birth"),
    email : Yup.string().email().required("Please Enter Email !!"),
    password : Yup.string().min(8).required("Please Enter Password !!"),
    cnfPassword : Yup.string().required("Please Enter Password !!").oneOf([Yup.ref("password"),null],"Password must Match")
})


export const loginValidation = Yup.object({

    email : Yup.string().email().required("Please Enter Email !!"),
    password : Yup.string().min(8).required("Please Enter Password !!"),
})