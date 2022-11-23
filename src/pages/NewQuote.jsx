import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
    const { sendRequest, status, error } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === "completed" && error == null) {
            history.push("/quotes");
        }
    }, [status, error, history]);

    const addQuoteHandler = (quoteData) => sendRequest(quoteData);

    return (
        <>
            <QuoteForm
                isLoading={status === "pending"}
                onAddQuote={addQuoteHandler}
                errorMsg={error}
            />
        </>
    );
};

export default NewQuote;
