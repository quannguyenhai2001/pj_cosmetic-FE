
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncTestFile } from 'slices/ProductSlice';

const TestScreen1 = () => {
    const dispatch = useDispatch();
    const [sendimage, setSendimage] = React.useState({});
    const changeHandle = (e) => {
        // function getBase64(file) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = function () {
        //         console.log(reader.result);
        //     };
        //     reader.onerror = function (error) {
        //         console.log('Error: ', error);
        //     };
        // }
        setSendimage(e.target.files[0]);
        // getBase64(e.target.files[0]); // prints the base64 string

    }
    const submit = (e) => {
        e.preventDefault();
        let data = new FormData();

        data.append("sendimage", sendimage);
        dispatch(fetchAsyncTestFile(data));
    }
    return (
        <>
            <form onSubmit={submit}>
                <input type="file" name="sendimage" onChange={changeHandle} multiple />
                <button>Submit</button>
            </form>
            <img src="/api1/auth-file/uploads/download.jpg" alt="dsds" />
        </>
    );
};

export default TestScreen1;