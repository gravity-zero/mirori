import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const SelectContainer = styled.select`
  font-size: 28px;
  
`;

export const OptionContainer = styled.option`
  position: absolute;
  top: 0px
  background-color: blue;

  
`;

export const Wrapper = styled.div`

.dd-wrapper {
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;

  .dd-header {
    @include styling();
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    padding: 0 20px;

    &__title--bold {
      font-weight: bold;
    }
  }

  .dd-list {
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 20px;

    li {
      list-style-type: none;

      &:first-of-type {
        > button {
          border-top: 1px solid #ccc;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }

      &:last-of-type > button {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      button {
        display: flex;
        justify-content: space-between;
        background-color: white;
        font-size: 16px;
        padding: 15px 20px 15px 20px;
        border: 0;
        border-bottom: 1px solid #ccc;
        width: 100%;
        text-align: left;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;

        &:hover, &:focus {
          cursor: pointer;
          font-weight: bold;
          background-color: #ccc;
        }
      }
    }
  }
}

  
`;

