import { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    return (
        <section className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Añadir comentario</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                    ref={commentEl}
                    className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    name="comment"
                    placeholder="Comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Name"
                    name="name"
                />
                <input
                    type="email"
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Email"
                    name="email"
                />
            </div>
            {error && <p className="text-xs text-red-500">Se necesita completar todos los campos</p>}
            <div className="mt-8 w-32 mx-auto lg:w-auto">
                <button
                    type="button"
                    /* onClick={handleCommentSubmission} */
                    className="transition duration-500 ease font-semibold hover:bg-secondary hover:text-black inline-block bg-primary text-lg rounded-full text-white px-8 py-3 cursor-pointer"
                >
                    Publicar
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comentario enviado y en espera de revisión</span>}
            </div>
        </section>
    );
}
 
export default CommentsForm;