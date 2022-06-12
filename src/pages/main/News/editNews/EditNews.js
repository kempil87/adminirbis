import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../../../../base/axios";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const EditNews = () => {
    const {id} = useParams()

    const navigate = useNavigate();

    const [news, setNews] = useState({});

    const getNews = () => {
        api.get(`/news/${id}`).then((res) =>{
            setNews(res.data)
        })
    }

    const sendEditNews = () =>{
        api.post(`/news/update`, news).then((res) =>{
            navigate('/news');
        })
    }

    useEffect(() => {
        getNews()
    }, [id])

    return (

        <div className="d-flex flex-column col-4">
            <label className="d-flex ">
                title:
                <input
                    value={news.title}
                    onChange={(e) => setNews({...news, title: e.target.value})} />
            </label>

            <label className="d-flex ">
                date:
                <input
                    value={news.date}
                    onChange={(e) => setNews({...news, date: e.target.value})} />
            </label>

            <label className="d-flex ">
                image:
                <input
                    value={news.image}
                    onChange={(e) => setNews({...news, image: e.target.value})} />
            </label>

            <label className="d-flex ">
                badge:
                <input
                    value={news.badge}
                    onChange={(e) => setNews({...news, badge: e.target.value})} />
            </label>

            <label className="d-flex ">
                source:
                <input
                    value={news.source}
                    onChange={(e) => setNews({...news, source: e.target.value})} />
            </label>

            <label className="d-flex ">
                tag:
                <input
                    value={news.tag}
                    onChange={(e) => setNews({...news, tag: e.target.value})} />
            </label>

            <label className="d-flex ">
                subTitle:
                <input
                    value={news.subtitle}
                    onChange={(e) => setNews({...news, subtitle: e.target.value})} />
            </label>
            <label className="d-flex ">
                shortSubTitle:
                <input
                    value={news.shortSubTitle}
                    onChange={(e) => setNews({...news, shortSubTitle: e.target.value})} />
            </label>
            <Button variant="light" onClick={sendEditNews}>Сохранить</Button>
        </div>
    );
};

export default EditNews;