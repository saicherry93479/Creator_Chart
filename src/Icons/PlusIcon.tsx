
const PlusIcon = () => {
  return (
    <div aria-hidden="true">
      <svg
        className="feather feather-plus text-white dark:text-white"
        fill="none"
        height={20}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={20}
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <line x1={12} x2={12} y1={5} y2={19} />
        <line x1={5} x2={19} y1={12} y2={12} />
      </svg>
    </div>
  );
};

export default PlusIcon;
