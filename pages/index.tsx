import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import {Valkyries} from "../components/Valkyries";

const Home: NextPage = () => {
    useEffect(() => {
        if (window && window.document) {
            const moveSecondHands = () => {
                const containers = document.querySelectorAll('.rotate');
                if (containers) {
                    setInterval(() => {
                        for (let i = 0; i < containers.length; i++) {
                            // @ts-ignore
                            if (containers[i].angle === undefined) {
                                // @ts-ignore
                                containers[i].angle = 15;
                            } else {
                                // @ts-ignored
                                containers[i].angle += 15;
                            }
                            // @ts-ignored
                            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                            // @ts-ignored
                            containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
                        }
                    }, 1000);
                }
            };

            moveSecondHands();
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Valkyries - A VVC product</title>
                <meta name="description" content="The Valkyries are coming."/>
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>
            <main className={styles.main}>
                <Image src={"/TheValkyriesSymbol.svg"} width={352} height={352} className={`${styles.image} rotate`}/>
                <div className={styles.logo}>
                    <Valkyries scale={0.2} />
                </div>
            </main>
        </div>
    )
}

export default Home
