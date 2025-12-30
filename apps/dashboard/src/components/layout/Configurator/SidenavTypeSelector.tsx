export const SidenavTypeSelector = () => (
  <div className="flex">
    <Button
      variant={sidenavType === "transparent" ? "gradient" : "outline"}
      paddingX="4"
      paddingY="3"
      onClick={() => dispatch(setSidenavType("transparent"))}
      className="w-full mb-2"
      // className="w-full mb-2 border xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-soft-purple700-pink500 xl-max:text-white xl-max:border-0"
      backgroundColor={
        sidenavType === "transparent"
          ? "bg-gradient-soft-purple700-pink500"
          : "bg-transparent"
      }
      btnText="Transparent"
    />
    <Button
      variant={sidenavType === "white" ? "gradient" : "outline"}
      paddingX="4"
      paddingY="3"
      onClick={() => dispatch(setSidenavType("white"))}
      className="w-full mb-2 ml-2"
      // className="w-full mb-2 ml-2 xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-soft-purple700-pink500 xl-max:text-white xl-max:border-0
      backgroundColor={
        sidenavType === "white"
          ? "bg-gradient-soft-purple700-pink500"
          : "bg-transparent"
      }
      btnText="White"
    />
  </div>
);
