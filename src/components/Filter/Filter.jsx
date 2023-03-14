import PropTypes from 'prop-types';
import { StyledLabel } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledLabel htmlFor="">
        <span>Filter by name:</span>
        <input
          type="text"
          placeholder="name"
          onChange={event => {
            dispatch(setFilter(event.target.value));
          }}
        />
      </StyledLabel>
    </div>
  );
};

export default Filter;

Filter.propTypes = { onFilterContacts: PropTypes.func };
