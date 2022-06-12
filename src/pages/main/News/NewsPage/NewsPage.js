import React, {useEffect, useState} from 'react';
import {api} from "../../../../base/axios";
import NewsCard from "../../../../components/cards/NewsCard/NewsCard";
import {Skeleton} from "../../../../components/ui/Loaders/Skeleton";
import {Link} from "react-router-dom";
import Notification from "../../../../components/ui/Notification/Notification";

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loader, setLoader] = useState(true);
    const [loaderDelete, setLoaderDelete] = useState(false);
    const [searchNews, setSearchNews] = useState('');

    const filterNews = news.filter(n =>{
            return n.title.toLowerCase().includes(searchNews.toLowerCase())
    })
    const getAllNews = (isDelete) => {
        api.get('/news').then((res) => {
            setTimeout(() => {
                setNews(res.data.reverse())
                setLoader(false)
            }, isDelete ? 0 : 1000)
        })
    }


    const deleteNews = (id) => {
        const res = window.confirm("Вы действительно хотите удалить новость?")
        if (!res) {
            return
        }

        setLoaderDelete(true)
        api.get(`/news/delete/${id}`).then((res) => {
            getAllNews(true)
            setTimeout(() => {
                setLoaderDelete(false)
            }, 1800)
        })
    }

    useEffect(() => {
        getAllNews(false)
    }, [])


    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="m-0">Все новости</h4>
                <div className='d-flex'>
                    <Link className="d-flex align-items-center m-2" to="/addnews"
                          style={{fontWeight: 300, textDecoration: "none", color: "gold"}} >
                        Добавить новость
                        <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                    </Link>
                    <form className='d-flex align-items-center position-relative'>
                        <span style={{fontWeight:200}} className="material-symbols-outlined position-absolute">search</span>
                        <input
                            value={searchNews}
                            className='search-club'
                            placeholder='Поиск'
                            type='text'
                            onChange={(e) =>setSearchNews(e.target.value)}
                        />
                        {searchNews &&(
                            <span onClick={() =>setSearchNews('')} style={{fontWeight:200,right:0,cursor:"pointer",zIndex:605}} className="material-symbols-outlined position-absolute">clear</span>
                        )}
                    </form>
                </div>

            </div>
            <div className="d-flex flex-column">
                {loader ? (
                    <>
                        {[...new Array(4)].map((_, index) => (
                            <div style={{marginTop: 16}} key={index}>
                                <Skeleton/>
                            </div>

                        ))}
                    </>
                ) : (
                    <div>
                        {filterNews.map(n => (
                            <NewsCard
                                n={n.n}
                                key={n._id}
                                image={n.image}
                                title={n.title}
                                deleteNewsItem={(id) => deleteNews(id)}
                                _id={n._id}
                                date={n.date}
                            />
                        ))}
                    </div>
                )}
            </div>

            {loaderDelete && (
                <Notification text='Новость была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
};

export default NewsPage;