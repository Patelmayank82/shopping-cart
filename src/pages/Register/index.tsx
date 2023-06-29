// import React from "react";
// import { useForm } from "react-hook-form";
// import Checkbox from "../../component/checkbox/index";

// const wait = (time: number) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// };

// type Props = {};

// const checkboxOptions = [
//   { id: 'optionA', text: 'Option A' },
//   { id: 'optionB', text: 'Option B' },
//   { id: 'optionC', text: 'Option C' },
// ];

// const Register = (props: Props) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting, isValid },
//   } = useForm({
//     mode: "onBlur",
//   });
//   const onSubmit = async (data) => {
//     await wait(3000);
//   };

//   console.log(errors);
//   return (
//     <form className="space-y-6" action="#" method="POST">
//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Name
//         </label>
//         <div className="mt-2">
//           <input
//             id="name"
//             {...register("name", {
//               required: { value: true, message: "name is required" },
//             })}
//             type="text"
//             autoComplete="name"
//             required
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//           {errors.name && (
//             <span className="text-red-500 text-sm font-bold">
//               {errors.name.message}
//             </span>
//           )}
          
//         </div>
//       </div>

    

//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Email address
//         </label>
//         <div className="mt-2">
//           <input
//             id="email"
//             {...register("email", {
//               required: { value: true, message: "email is required" },
//               pattern: {
//                 value: `/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/`,
//                 message: "please enter valid email ",
//               },
//             })}
//             type="email"
//             autoComplete="email"
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//           {errors.email && (
//             <span className="text-red-500 text-sm font-bold">
//               {errors.email.message}
//             </span>
//           )}
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Password
//         </label>
//         <div className="mt-2">
//           <input
//             id="password"
//             {...register("password", {
//               required: { value: true, message: "password is required" },
//               minLength: {
//                 value: 6,
//                 message: "password must have minimum 6 character",
//               },
//               maxLength: {
//                 value: 15,
//                 message: "password must have maximum 15 character",
//               },
//             })}
//             type="password"
//             autoComplete="current-password"
//             required
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//           {errors.password && (
//             <span className="text-red-500 text-sm font-bold">
//               {errors.password.message}
//             </span>
//           )}
//         </div>
//       </div>

//       <div>
//         <label
//           htmlFor="confirmPassword"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Confirm Password
//         </label>
//         <div className="mt-2">
//           <input
//             id="confirmpassword"
//             {...register("confirmpassword", {
//               required: "confirm password is required",
//               // validate : (value) => {
//               //   if(value!== values?.password){
//               //     return 'passwords do not match'
//               //   }
//               // }
//             })}
//             aria-invalid={errors.confirmpassword ? "true" : "false"}
//             type="password"
//             autoComplete="new-password"
//             required
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//           {errors.confirmpassword && (
//             <span className="text-red-500 text-sm font-bold">
//               {errors.confirmpassword.message}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* <Checkbox
//          label="Checkbox Group"
//          items={checkboxOptions}
//          name="checkboxGroupName"
//          control={control}
//          rules={{ required: 'Please select at least one option' }}
//       /> */}

//       <div>
//         <button
//           type="submit"
//           disabled={isSubmitting || !isValid}
//           className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  disabled:bg-slate-500 disabled:cursor-wait"
//         >
//           Sign in
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Register;



import { useForm } from "react-hook-form";
import Select from "../../../component/dropdown";
import Input from "../../../component/input";
import Checkbox from "../../../component/checkbox";
// import MultipleCheckbox from "../../../component/checkbox";
import Radio from "../../../component/radio";

const wait = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  const checkboxOptions = [
    { id: 'Cricket', text: 'cricket' },
    { id: 'volleyball', text: 'volleyball' },
    { id: 'foot-ball', text: 'foot-ball' },
  ];

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* <Select
        control={control}
        name="select"
        rules={{
          required: {
            value: true,
            message: "You have to select One",
          },
        }}
        label="Select"
        id="select"
      /> */}
      <Input
        control = {control}
        name="name"
        rules={{
          required: {
            value: true,
            message: "Name is Required..",
          },
        }}
        label="Name"
        id="name"
        autoComplete="name"
      />
      <Input
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is Required..",
          },
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Please Provide valid email address",
          },
        }}
        name="email"
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
      />
      <Input
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: "Password is Required..",
          },
        }}
        label="Password"
        id="password"
        type="password"
        autoComplete="new-password"
      />
      <Select
        control={control}
        name="hobbies"
        rules={{
          required: {
            value: true,
            message: "hobbies is Required..",
          },
        }}
        label="hobbies"
        id="hobbies"
        options={[
          {
            value:'cricket',
            Text:'cricket'
          }
        ]}
      />
      <Radio
        label="Gender"
        items={[
          {
            id: "male",
            text: "Male",
          },
          {
            id: "female",
            text: "Female",
          },
          {
            id: "other",
            text: "Other",
          },
        ]}
        name="gender"
        control={control}
        rules={{
          required: {
            value: true,
            message: "gender is Required..",
          },
        }}
      />
      
{/* const checkboxOptions = [
  { id: 'optionA', text: 'Option A' },
  { id: 'optionB', text: 'Option B' },
  { id: 'optionC', text: 'Option C' },
]; */}

<Checkbox
  label="Checkbox Group"
  items={checkboxOptions}
  name="checkboxGroupName"
  control={control}
  rules={{ required: 'Please select at least one option' }}
/>
      <div>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Register;