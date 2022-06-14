import React, {useEffect, useState} from 'react';
import NewsCard from "../../../../components/cards/NewsCard/NewsCard";
import {Skeleton} from "../../../../components/ui/Loaders/Skeleton";
import {Link} from "react-router-dom";
import Notification from "../../../../components/ui/Notification/Notification";
import {observer} from "mobx-react";
import {useRootStore} from "../../../../base/hooks/useRootStore";

const NewsPage = observer(() => {
    const {newsStore} = useRootStore();

    const [searchNews, setSearchNews] = useState('');

    const filterNews = newsStore.news.filter(n => {
        return n.title.toLowerCase().includes(searchNews.toLowerCase())
    })

    useEffect(() => {
        newsStore.getAllNews()
    }, [])

    return (
        <div className="pt-3">
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="m-0">Все новости</h4>
                <div className='d-flex'>
                    <Link className="d-flex align-items-center m-2" to="/news/add"
                          style={{fontWeight: 300, textDecoration: "none", color: "gold"}}>
                        Добавить новость
                        <span style={{color: "gold"}} className="material-symbols-outlined m-2">add_circle</span>
                    </Link>
                    <form className='d-flex align-items-center position-relative'>
                        <span style={{fontWeight: 200}}
                              className="material-symbols-outlined position-absolute">search</span>
                        <input
                            value={searchNews}
                            className='search-club'
                            placeholder='Поиск'
                            type='text'
                            onChange={(e) => setSearchNews(e.target.value)}
                        />
                        {searchNews && (
                            <span onClick={() => setSearchNews('')}
                                  style={{fontWeight: 200, right: 0, cursor: "pointer", zIndex: 605}}
                                  className="material-symbols-outlined position-absolute">clear</span>
                        )}
                    </form>
                </div>

            </div>
            <div className="d-flex flex-column">
                {newsStore.loader ? (
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
                                key={n._id}
                                image={n.image}
                                title={n.title}
                                deleteNewsItem={(id) => newsStore.deleteNews(id)}
                                _id={n._id}
                                date={n.date}
                            />
                        ))}
                    </div>
                )}
            </div>

            {newsStore.loaderNotification && (
                <Notification text='Новость была успешно удалена' icon='check_circle'/>
            )}
        </div>
    );
});

export default NewsPage;