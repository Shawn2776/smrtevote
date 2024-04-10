const PasswordStrength = ({ passStrength }) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: passStrength + 1 }).map((i, index) => (
        <div
          key={index}
          className={`h-2 w-16 mt-2 rounded-md ${
            passStrength === 0
              ? ""
              : passStrength === 1
              ? "bg-red-500"
              : passStrength === 2
              ? "bg-orange-500"
              : "bg-green-500"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PasswordStrength;
