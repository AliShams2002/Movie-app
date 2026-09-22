import SectionHeader from "../ui/SectionHeader";
import SectionMovie from "../ui/SectionMovie";

const MovieRow = ({
  title,
  subtitle = null,
  icon = null,
  data,
  type,
  linkTo = null,
  containerVariants,
  itemVariants,
}) => {
  return (
    <section className="container mx-auto px-6 py-12 border-t border-white/5">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
        linkTo={linkTo}
      />
      <SectionMovie
        initialData={data}
        type={type}
        itemVariants={itemVariants}
        containerVariants={containerVariants}
      />
    </section>
  );
};

export default MovieRow;
