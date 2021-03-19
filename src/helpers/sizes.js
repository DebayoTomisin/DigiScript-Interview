export default {
  down(size) {
    const sizes = {
      xs: '576px',
      md: '992px'
    };

    return `@media (max-width: ${sizes[size]})`;
  }
};
