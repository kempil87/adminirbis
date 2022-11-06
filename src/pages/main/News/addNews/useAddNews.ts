import {useRootStore} from "../../../../base/hooks/useRootStore";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

export const useAddNews = () => {
    const {newsStore, clubStore} = useRootStore();

    const nav = useNavigate()
    const formMethods = useForm();

    const createNews = async (data) => {
        await newsStore.addNews(data)
        formMethods.reset()
        nav(`/news`)
    }

    useEffect(() => {
        clubStore.getAllClub()
    }, [])

    return {formMethods, createNews, clubStore}
}