import {useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword, getAuth} from "firebase/auth";

// Helmet
import { Helmet } from 'react-helmet';

// Form
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

// Redux
import { useDispatch } from 'react-redux';

import {setUser} from "../../store/slices/userSlice";

const Login = () => {

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 6 &&
                    val.toString().length <= 40
            )
            .required("This field is required!"),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (formValue) => {
        const { email, password } = formValue;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/profile');
            })
            .catch(console.error)
    };

    return (
        <div className="p-10 bg-gradient-to-b from-purple-200 to-white">
            <Helmet>
                <title> Gyumri Brand Shop | Login </title>
            </Helmet>

            <div className="bg-grey-lighter flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign In</h1>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="form-control block border-2 text-purple-400 placeholder-purple-400 border-purple-400 w-full p-3 rounded-lg mb-2 outline-0"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-700 text-xs py-2"
                                />

                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control block border-2 text-purple-400 placeholder-purple-400 border-purple-400 w-full p-3 rounded-lg mb-2 outline-0"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-700 text-xs py-2"
                                />

                                <button
                                    type="submit"
                                    className="w-full text-center py-3 transition rounded rounded-lg bg-purple-400 text-white hover:bg-purple-700 focus:outline-none my-1"
                                >
                                    Sign In
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;