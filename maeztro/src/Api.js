// USER -----------------------------------------------------------

export function USER_GET(id) {
  return {
    url: `http://localhost:3004/users?id=${id}`,
    options: {
      method: 'GET'
    }
  };
}

export function USER_CREATE(body) {
  return {
    url: 'http://localhost:3004/users',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  };
}
// USER -----------------------------------------------------------

// FAQ ------------------------------------------------------------
export function FAQ_GET() {
  return {
    url: `http://localhost:3004/faqs`,
    options: {
      method: 'GET'
    }
  };
}

// ANUNCIO -------------------------------
export function ANN_GET() {
  return {
    url: `http://localhost:3004/announcements`,
    options: {
      method: 'GET'
    }
  };
}

//DOCS
export function ASIDEDOCS_GET() {
  return {
    url: `http://localhost:3004/asidedocs`,
    options: {
      method: 'GET'
    }
  };
}
