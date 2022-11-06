import {useNavigate, useParams} from "react-router-dom";
import {useRootStore} from "../../../../base/hooks/useRootStore";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

const breadcrumbs = [{title: 'Новости', path: '/news'}, {title: 'Редактирование новости'}]
export const useEditNews = () => {
    const {id} = useParams()
    const {newsStore, clubStore} = useRootStore();
    const navigate = useNavigate()
    const formMethods = useForm();

    const setFormValues = () => {
        Object.keys(newsStore.newsItem).forEach((key) => {
            formMethods.setValue(String(key), newsStore.newsItem[key])
        })
    }

    const editNews = (data) => {
        newsStore.editNews(data)
        setTimeout(() => {
            navigate('/news')
        }, 1000)
    }

    useEffect(() => {
        clubStore.getAllClub()
        newsStore.getNews(id).then(() => setFormValues())
    }, [])

    return {formMethods, clubStore,breadcrumbs,editNews, id}
}