import React from 'react';
import { useGlobalContext } from '../context/global';
import Popular from './Popular';
import styled from 'styled-components';
import Upcoming from './Upcoming';
import Airing from './Airing';

function Homepage() {
    const {
        handleSubmit,
        search,
        searchAnime,
        handleChange,
        getUpcomingAnime,
        getAiringAnime,
        getPopularAnime,
    } = useGlobalContext();

    const [rendered, setRendered] = React.useState('popular');

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />;
            case 'airing':
                return <Airing rendered={rendered} />;
            case 'upcoming':
                return <Upcoming rendered={rendered} />;
            default:
                return <Popular rendered={rendered} />;
        }
    };

    return (
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular'
                            ? 'Popular Anime'
                            : rendered === 'airing'
                            ? 'Airing Anime'
                            : 'Upcoming Anime'}
                    </h1>
                </div>
                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button
                            onClick={() => {
                                setRendered('popular');
                            }}
                        >
                            Popular <i className="fas fa-fire"></i>
                        </button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input
                                type="text"
                                placeholder="Search Anime"
                                value={search}
                                onChange={handleChange}
                            />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                    <div className="filter-btn airing-filter">
                        <button
                            onClick={() => {
                                setRendered('airing');
                                getAiringAnime();
                            }}
                        >
                            Airing
                        </button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button
                            onClick={() => {
                                setRendered('upcoming');
                                getUpcomingAnime();
                            }}
                        >
                            Upcoming
                        </button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled>
    );
}

const HomepageStyled = styled.div`
    background-color: #EDEDED;

    header {
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all 0.4s ease-in-out;

        @media screen and (max-width: 1024px) {
            width: 85%;
            padding: 2rem 3rem;
        }

        @media screen and (max-width: 480px) {
            width: 100%;
            padding: 1rem 1.5rem;
        }

        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;

            h1 {
                font-size: 2rem;

                @media screen and (max-width: 480px) {
                    font-size: 1.5rem;
                }
            }
        }

        .search-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;

            @media screen and (max-width: 1024px) {
                flex-direction: column;
            }

            @media screen and (max-width: 480px) {
                flex-direction: column;
                gap: 0.5rem;
            }

            button {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.7rem 1.5rem;
                outline: none;
                border-radius: 30px;
                font-size: 1.2rem;
                background-color: #fff;
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                font-family: inherit;
                border: 5px solid #e5e7eb;

                @media screen and (max-width: 480px) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }

            form {
                position: relative;
                width: 100%;

                .input-control {
                    position: relative;
                    transition: all 0.4s ease-in-out;
                }

                .input-control input {
                    width: 100%;
                    padding: 0.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    background-color: #fff;
                    border: 5px solid #e5e7eb;
                    transition: all 0.4s ease-in-out;

                    @media screen and (max-width: 480px) {
                        padding: 0.5rem 0.8rem;
                        font-size: 1rem;
                    }
                }

                .input-control button {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    padding: 0.7rem 1.5rem;
                    font-size: 1.2rem;
                    background-color: #27AE60;
                    border: none;
                    border-radius: 0 30px 30px 0;
                    cursor: pointer;

                    @media screen and (max-width: 480px) {
                        padding: 0.5rem 1rem;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`;

export default Homepage;