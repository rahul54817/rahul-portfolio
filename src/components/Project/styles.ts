import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
  }

  .project {
    padding: 1rem 0.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
    min-height: 650px;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 1rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 3rem;
        transition: 0.3s;
      }

      a > img:hover {
        transform: scale(1.1);
      }
    }

    /* IMAGE SECTION */

    .project-image {
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 1rem;
}

.project-image img {
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #111;
  border-radius: 1rem;
  transition: 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.02);
}

/* BUTTONS */

.image-buttons {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);

  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  opacity: 0;
  visibility: hidden;

  transition: 0.3s ease;
}

.project-image:hover .image-buttons {
  opacity: 1;
  visibility: visible;
}

.image-buttons button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.image-buttons button:hover {
  background: var(--green);
  transform: scale(1.1);
}

    h3 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      line-height: 1.6;
      font-size: 1.4rem;

      a {
        color: #fff;
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;

        &:hover {
          color: var(--green);
        }
      }
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        padding: 0;

        li {
          background: #3a3a3a;
          color: var(--green);
          padding: 0.6rem 1.2rem;
          border-radius: 2rem;
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    h2 {
      font-size: 3rem;
    }

    .projects {
      grid-template-columns: 1fr;
    }

    .project {
      min-height: auto;
    }

    .project-image img {
      height: 250px;
    }
  }
`;