import { h } from 'preact';
import style from './style.css';
import classNames from 'classnames';
import { parse } from 'preact-parser'
import { fetchJournalData } from '../../contexts/home';
import { useEffect, useState } from 'preact/hooks';
import { toIndonesiaDate } from '../../utils/helpers';

const Home = () => {
  const [data, setData] = useState([])
  useEffect(async () => {
    const journalData = await fetchJournalData()
    setData(journalData)
  }, [])
  
  return (
    <div class={style.home}>
      {data.map((element) => {
        console.log(element)
        return (
          <Box 
            key={element.id} 
            title={element.title} 
            content={element.content} 
            date_created={toIndonesiaDate(element.date_created)}
          />
        )
      })}
    </div>
  )
}

const Box = (props) => (
  <div class={classNames(style["box-article"])}>
    <div class={classNames(style.top)}>
      <span>{props.date_created}</span>
    </div>
    <div class={classNames(style.mid)}>
      <h2>{props.title}</h2>
      <p>{parse(props.content)}</p>
    </div>
  </div>
);

export default Home;
