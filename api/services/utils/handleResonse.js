export const failResponse = (response, httpStatus, reason) => {
    response.status(httpStatus).json({
        status: false,
        reason
    })
};

export const finishResponse = (response, httpStatus, data) => {
    response.status(httpStatus).json({
        status: true,
        data
    })
};