import React from 'react';
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import {CustomPageHeader} from "../../../../components/pageHeader/CustomPageHeader";
import {CustomButton} from "../../../../components/customButton/CustomButton";
import {TableAntd} from "../../../../components/tableAntd/TableAntd";
import {Card} from "antd";
import {useNewsPage} from "./useNewsPage";

export const NewsPage = observer(() => {
    const {newsStore,columns} = useNewsPage()

    return (
        <>
            <CustomPageHeader breadcrumbs={[{title:'Новости'}]} title={'Новости'}>
                <Link to="/news/add">
                    <CustomButton>
                        Добавить новость
                    </CustomButton>
                </Link>
            </CustomPageHeader>

            <Card>
                <TableAntd loading={newsStore.loader} data={newsStore.news} columns={columns} />
            </Card>
        </>
    );
});
