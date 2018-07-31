// true = 'dit' = '.'
// false = 'dah' = '_'


// Example usage:
// 
// let input = [true, false];
// let example = function() {
//     let output = tree;
//     for (var x in input) {
//         output = output[input[x]];
//     }
//     if (typeof output !== 'undefined') {
//         return output.value;
//     }
//     return false;
// };

const tree = {
    // dit
    true: {
        'value': 'E',
        true: {
            'value': 'I',
            true: {
                'value': 'S',
                true: {
                    'value': 'H',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                },
                false: {
                    'value': 'V',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                }
            },
            false: {
                'value': 'U',
                true: {
                    'value': 'F',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                },
                false: {
                    'value': 'Ü',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                }
            }
        },
        false: {
            'value': 'A',
            true: {
                'value': 'R',
                true: {
                    'value': 'L',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                },
                false: {
                    'value': 'Ä',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                }
            },
            false: {
                'value': 'W',
                true: {
                    'value': 'P',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                },
                false: {
                    'value': 'J',
                    true: {
                        'value': '',
                        true: {},
                        false: {}
                    },
                    false: {
                        'value': '',
                        true: {},
                        false: {}
                    }
                }
            }
        }
    },
    // dah
    false: {
        'value': 'T',
        true: {
            'value': 'N',
            true: {
                'value': 'D',
                true: {
                    'value': 'B',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                },
                false: {
                    'value': 'X',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                }
            },
            false: {
                'value': 'K',
                true: {
                    'value': 'C',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                },
                false: {
                    'value': 'Y',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                }
            }
        },
        false: {
            'value': 'M',
            true: {
                'value': 'G',
                true: {
                    'value': 'Z',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                },
                false: {
                    'value': 'Q',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                }
            },
            false: {
                'value': 'O',
                true: {
                    'value': 'Ö',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                },
                false: {
                    'value': 'Ch',
                    true: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    },
                    false: {
                        'value': '',
                        true: {
                            'value': '',
                            true: {},
                            false: {}
                        },
                        false: {
                            'value': '',
                            true: {},
                            false: {}
                        }
                    }
                }
            }
        }
    }
};