import axios from "axios";
import React from "react";
import TemplateSearchCitacao from "./TemplateSearchCitacao.tsx";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";

const qc = new QueryClient();

const fetchCitacao = async () => {
    const {data} = await axios.get(
        "https://bible-api.com/romans12:1-2,5-7,9,13:1-9&10"
    );
    return data;
};

function SearchCitacao(){
    return(
        <QueryClientProvider client={qc}>
            <SearchCitacaoWithData/>
        </QueryClientProvider>
    );
};

function SearchCitacaoWithData() {
    const queryClient = useQueryClient();
    const {data, status} = useQuery("Citações", fetchCitacao);
    return <TemplateSearchCitacao data={data} status={status} />;
}

export default SearchCitacao;




