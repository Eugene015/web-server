const qualitiesList = qualities.map((q) => ({
  label: q.name,
  value: q._id,
}));
const professions = useSelector(getProfessions());
const professionLoading = useSelector(getProfessionsLoadingStatus());
const professionsList = professions.map((p) => ({
  label: p.name,
  value: p._id,
}));
const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const isValid = validate();
  if (!isValid) return;
  dispatch(
    updateUser({
      ...data,
      qualities: data.qualities.map((q) => q.value),
    })
  );
};
