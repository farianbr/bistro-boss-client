import PropTypes from 'prop-types';

const SectionTitle = ({subHeading, heading, headingClassName}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-12">
            <div className="italic text-yellow-600 text-xl font-normal font-['Inter'] mb-4">---{subHeading}---</div>
            <div className={`${headingClassName} text-neutral-900 text-[40px] font-normal font-['Inter'] border-y-4 py-4 uppercase`}>{heading}</div>
        </div>
    );
};

SectionTitle.propTypes = {
    subHeading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}

export default SectionTitle;