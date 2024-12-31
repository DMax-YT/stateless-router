export const useNewYear = () => {
  const today = new Date()

  switch (today.getMonth()) {
    case 0: {
      return today.getDate() <= 14
    }

    case 11: {
      return today.getDate() >= 23
    }

    default: {
      return false
    }
  }
}
